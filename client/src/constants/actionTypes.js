// the purpose of ths file is to turn the strings into export constants. The reason for this is that if a string is mispelled in the application, an error won't be thrown and we won't be able tp find the issue. However if we use variable, then the browser will pinpoint the issue if it's mispelled.
export const CREATE = "CREATE";
export const UPDATE = "UPDATE";
export const DELETE = "DELETE";
export const FETCH_ALL = "FETCH_ALL";
