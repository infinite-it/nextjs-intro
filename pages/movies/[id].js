import {useRouter} from "next/router";

export default function Detail(){
    let router = useRouter();
    console.log(router);
    return (
        <div>
            <h4>{router.query.title || 'Loding...'}</h4>
        </div>
    );
}