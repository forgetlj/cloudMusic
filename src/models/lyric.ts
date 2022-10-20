export interface Lyric{
    sgc:boolean,
    sfy:boolean,
    qfy:boolean,
    lrc:lrc,
    klyric:klyric,
    tlyric:tlyric,
    romalrc:romalrc,
    code:number
}

export interface lrc{
    version:number,
    lyric:string,
}
interface klyric{
    version:number,
    lyric:string
}
interface tlyric{
    version:number,
    lyric:string
}
interface romalrc{
    version:number,
    lyric:string
}