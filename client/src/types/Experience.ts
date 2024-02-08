export type Experience = {
    id: string,
    title: string,
    company: string,
    location?: string,
    startDate: Date,
    endDate?: Date,
    description: string,
    isCurrentRole: boolean,
    skills?: string[]
}