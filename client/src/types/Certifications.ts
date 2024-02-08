export type certifications = {
    id: string,
    title: string,
    issuer: string,
    issueDate: Date,
    expirationDate?: Date,
    credentialID: string,
    credentialURL: string,
    description: string,
    skills?: string[]
}