import * as React from "react";
import { Description } from '../../common/components/Description';
import { Map } from '../../common/components/Map';
import { Tags } from '../../common/components/Tags';


interface Props {
    description: string;
    tags: string;
    onUpdateDescription: (field: string, value: string) => void;
}


export const MapPageLayout: React.StatelessComponent<Props> = (props: Props) => {
    return (
        <div >
            <Map />
            <Description description={props.description} onUpdateDescription={this.onUpdateDescription} />
            <Tags tags={props.tags} />
        </div>
    )
}

