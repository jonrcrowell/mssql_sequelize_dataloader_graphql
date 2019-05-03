import {  flatten } from 'ramda';

import Player, { Team, PlayerTeam } from '../Models/Player'
import Country from '../Models/Country';

const resolvers = {
    Query: {
        countries: () => Country.findAll(),
        teams: () => Team.findAll({ include: [{ model: Player, through: PlayerTeam, as: 'Players'}] }),
        players: () => Player.findAll({ include: [{ all: true }]})
    },
    Player: {
        Countries (parent){
            return Country.findByPk(parent.CountryId)
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