import {useEffect} from 'react'

//We did not import 'React' because there is no JSX Here !

function useDocTitle(count) {
    useEffect(() => {
        document.title = `Count ${count}`
    },[count]);
}

export default useDocTitle;
