import { useState } from 'react';

type OutputType = {
    on: boolean,
    onToggle: () => void
}

const useToggle = (initialState: boolean = false): OutputType => {
    const [on, setOn] = useState<boolean>(initialState);

    const onToggle = () => {
        setOn(prev => !prev)
    }

    return { on, onToggle };
}

export default useToggle;