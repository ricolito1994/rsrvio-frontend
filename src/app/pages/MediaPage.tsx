import React, {useEffect, useState, useContext} from 'react';
import { AppContext } from 'app/context';

const MediaPage = (): React.ReactElement => {
    const {
        
    } = useContext<any>(AppContext);
    return (<>Media, upload your medias here ..</>)
}

export default MediaPage;