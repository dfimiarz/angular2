export class ServiceRequest {

    constructor(
        public subName: string,
        public subEmail: string,
        public subPhone: string,
        public reqLocation: string,
        public reqDesc: string,
        public reqInst?: string

    ) { }

}
