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

export type Team = {
  TeamID: number
  Key: string
  Active: boolean
  City: string
  Name: string
  LeagueID: number
  StadiumID: number
  Conference: string
  Division: string
  PrimaryColor: string
  SecondaryColor: string
  TertiaryColor: string
  QuaternaryColor: string
  WikipediaLogoUrl: string
  WikipediaWordMarkUrl: string | null
  GlobalTeamID: number
  NbaDotComTeamID: number
  HeadCoach: string
  Season: number
  SeasonType: number
  Wins: number
  Losses: number
  Percentage: number
  ConferenceWins: number
  ConferenceLosses: number
  DivisionWins: number
  DivisionLosses: number
  HomeWins: number
  HomeLosses: number
  AwayWins: number
  AwayLosses: number
  LastTenWins: number
  LastTenLosses: number
  PointsPerGameFor: number
  PointsPerGameAgainst: number
  Streak: number
  GamesBack: number
  StreakDescription: string
  ConferenceRank: number
  DivisionRank: number
}
