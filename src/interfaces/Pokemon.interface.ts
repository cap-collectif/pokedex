export interface IPokemon {
  readonly name: string;
  readonly pokemonId: number;
  readonly pokemon_v2_pokemonspecy:
    | {
        readonly is_legendary: boolean;
      }
    | null
    | undefined;
  readonly sprites: ReadonlyArray<{
    readonly sprites: any;
  }>;
  readonly type: ReadonlyArray<{
    readonly pokemon_v2_type:
      | {
          readonly name: string;
        }
      | null
      | undefined;
  }>;
}
