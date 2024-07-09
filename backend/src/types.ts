export type TeamsData = {
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
}
export type StandingsData = {
  Season: number
  SeasonType: number
  TeamID: number
  Key: string
  City: string
  Name: string
  Conference: string
  Division: string
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
  GlobalTeamID: number
  ConferenceRank: number
  DivisionRank: number
}
