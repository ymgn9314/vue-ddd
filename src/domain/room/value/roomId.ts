export class RoomId {
    private readonly _value: string

    constructor(value: string) {
        if (value.length === 0) {
            throw new Error('RoomId cannot be empty')
        }
        this._value = value
    }

    get value() {
        return this._value
    }

    public equals(other: RoomId): boolean {
        if (!(other instanceof RoomId) || other === null) {
            return false
        }

        return this === other || this._value === other.value
    }
}
