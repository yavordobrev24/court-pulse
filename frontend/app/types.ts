export type Game = {
  GameID: number
  Season: number
  SeasonType: number
  Status: string
  Day: string
  DateTime: string
  AwayTeam: string
  HomeTeam: string
  AwayTeamID: number
  HomeTeamID: number
  StadiumID: number
  AwayTeamScore: number
  HomeTeamScore: number
  Updated: string
  GlobalGameID: number
  GlobalAwayTeamID: number
  GlobalHomeTeamID: number
  IsClosed: boolean
  NeutralVenue: boolean
  DateTimeUTC: string
}
