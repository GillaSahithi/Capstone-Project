export class Events {
    constructor(
        public id: string,
        public name: string,
        public vendorId: string,
        public eventDate: Date,
        public description: string,
        public location: string
      ) {}
}
