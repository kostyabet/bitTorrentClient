export default function(info : Map<any, any>) : number {
    if (info.has('length'))
        return info.get('length')
    
    let res : number = 0;
    info.get('files').forEach((element : any) => {
        res += element instanceof Map ? element.get('length') : 0
    });
    return res;
}