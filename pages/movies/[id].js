import {useRouter} from "next/router";

export default function Detail(){
    let router = useRouter();
    console.log(router);
    console.log(1)
    return "detail";
}