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

export type Player = {
  PlayerID: number
  SportsDataID: string
  Status: string
  TeamID: number
  Team: string
  Jersey: number
  PositionCategory: string
  Position: string
  FirstName: string
  LastName: string
  BirthDate: string
  BirthCity: string
  BirthState: string
  BirthCountry: string
  GlobalTeamID: number
  Height: number
  Weight: number
  StatID: number
  SeasonType: number
  Season: number
  Name: string
  Started: number
  Updated: string
  Games: number
  FantasyPoints: number
  Minutes: number
  Seconds: number
  FieldGoalsMade: number
  FieldGoalsAttempted: number
  FieldGoalsPercentage: number
  EffectiveFieldGoalsPercentage: number
  TwoPointersMade: number
  TwoPointersAttempted: number
  TwoPointersPercentage: number
  ThreePointersMade: number
  ThreePointersAttempted: number
  ThreePointersPercentage: number
  FreeThrowsMade: number
  FreeThrowsAttempted: number
  FreeThrowsPercentage: number
  OffensiveRebounds: number
  DefensiveRebounds: number
  Rebounds: number
  OffensiveReboundsPercentage: number
  DefensiveReboundsPercentage: number
  TotalReboundsPercentage: number
  Assists: number
  Steals: number
  BlockedShots: number
  Turnovers: number
  PersonalFouls: number
  Points: number
  TrueShootingAttempts: number
  TrueShootingPercentage: number
  PlayerEfficiencyRating: number
  AssistsPercentage: number
  StealsPercentage: number
  BlocksPercentage: number
  TurnOversPercentage: number
  UsageRatePercentage: number
  FantasyPointsFanDuel: number
  FantasyPointsDraftKings: number
  FantasyPointsYahoo: number
  PlusMinus: number
  DoubleDoubles: number
  TripleDoubles: number
  FantasyPointsFantasyDraft: number
  IsClosed: boolean
  LineupConfirmed: string | null
  LineupStatus: string
}
