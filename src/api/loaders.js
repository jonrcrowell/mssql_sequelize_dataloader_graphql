import DataLoader from 'dataloader';
import { groupBy } from 'ramda';
import Sequelize from 'sequelize';

import Player, { Team, PlayerTeam } from '../../Models/Player';
const Op = Sequelize.Op;

const createPlayerLoader = () => {
    return new DataLoader(playerIds => {
      return Player.findAll({
        where: {
            PlayerId: {
                [Op.or]: playerIds
            }
        }
      })
        .then(players => {
          console.log('players loader batch: ', playerIds.length)
          const playersById = groupBy(obj => obj.PlayerId)(players);
          return playerIds.map(id => playersById[id])
        })
    })
  }

const createTeamLoader = () => {
  return new DataLoader(teamIds => {
    return Team.findAll({
        include: [{ model: Player, through: PlayerTeam, as: 'Players'}],
        where: {
            TeamId: {
                [Op.or]: teamIds
            }
        }
    })
      .then(teams => {
        console.log('teams loader batch: ', teamIds.length);
        const teamsById = groupBy(obj => obj.TeamId)(teams);
        return teamIds.map(teamArr => teamArr.map(id => teamsById[id]))
      })
  })
}
const loaders = () => ({
    player: createPlayerLoader(),
    team: createTeamLoader()
});

export default loaders;