import {  flatten } from 'ramda';

import Player, { PlayerTeam } from '../Models/Player'

const resolvers = {
    Query: {
        countries: (_, __, ctx) => ctx.models.country.findAll(),
        teams: (_, __, ctx) => ctx.models.team.findAll({ include: [{ model: Player, through: PlayerTeam, as: 'Players'}] }),
        players: (_, __, ctx) => ctx.models.player.findAll({ include: [{ all: true }]})
    },
    Player: {
        Countries (parent, _, ctx){
            return ctx.models.country.findByPk(parent.CountryId)
        },
        async Teams (parent, _, { loader }){
            const teamIds = parent.Teams.map(({TeamId}) => TeamId);
            const teams = await loader.team.load(teamIds);
     
            return flatten(teams);
        },
    },
    Team: {
        async Players (parent, _, { loader }) {
            const playerIds = parent.Players.map(({PlayerId}) => PlayerId);
            const players = await loader.player.load(playerIds);

            return players;
        }
    }
}



export default resolvers;