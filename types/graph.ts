export interface IDictionary<T> {
	[key: string]: T;
}

export type GraphObj = IDictionary<IDictionary<number>>;
