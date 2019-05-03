//import Team from '../Models/Team'
//import PlayerTeam from '../Models/PlayerTeam'
import Player, { Team, PlayerTeam } from '../Models/Player'
import Country from '../Models/Country';

import Sequelize from 'sequelize'
const Op = Sequelize.Op;

const resolvers = {
    Query: {
        countries: () => Country.findAll(),
        teams: () => Team.findAll({ include: [{ model: Player, through: PlayerTeam, as: 'Players'}] }),
        players: () => Player.findAll({ include: [{ model: Team, through: PlayerTeam, as: 'Teams'}, { model: Country}] })
    },
    Player: {
        Countries (parent){
            return Country.findByPk(parent.CountryId)
        },
        Teams (parent, args, ctx){
            return Team.findAll({ 
                include: [{ model: Player, through: PlayerTeam, as: 'Players'}],
                where: {
                    [Op.or]: parent.Teams.map(({TeamId}) => ({TeamId}))
                  }
            })
        },
    },
    Team: {
        Players (parent) {
            return Player.findAll({ 
                include: [{ model: Team, through: PlayerTeam, as: 'Teams'}],
                where: {
                    [Op.or]: parent.Players.map(({PlayerId}) => ({PlayerId}))
                  } 
            })
        }
    }
}



export default resolvers;