export interface RepositoryInterface<T> {
    findOne(id: string): Promise<T>;

    findByIds(ids: string[]): Promise<T[]>;
}