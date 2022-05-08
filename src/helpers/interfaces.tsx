export interface TelegramInterface {
    apiId: number,
    apiHash: string,
    stringSession: string,
    channelId: string
}
export interface signInEvents {
    onInputPhoneNumber: () => Promise<string>,
    onInputPhoneCode: () => Promise<string>,
    onInputPassword: () => Promise<string>
}