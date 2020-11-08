import {Router, useRouter} from 'next/router';

export default function Search(){
    const router = useRouter();
    console.log(router.query);
    return <div>
        <h2>Your Result</h2>
        <h3>{router.query.query}</h3>
    </div>
}