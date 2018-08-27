import * as React from 'react';
import { Link } from 'react-router';
import { MapPageLayout } from '../../common/components/mapPageLayout';

interface Props {

}

interface State {
  description: string;
  tags: string[];
}

export class MapPageContainer extends React.PureComponent<Props, State>  {

  public constructor(props: Props) {
    super(props);
    this.state = {
      description: "",
      tags: []
    }
  }
  
  private onUpdateDescription = (field, value) => {
    this.setState(updateDescription(field, value));
  }

  private onUpdateTags = (field, value) => {
    this.setState(updateTags(field, value));
  }

  private onDeleteTags = (field, value) => {
    this.setState(onDeleteTags(field, value));
  }

  public render() {
    return (
      <div className="container-fluid row">
        <MapPageLayout description={this.state.description}
          tags={this.state.tags}
          onUpdateDescription={this.onUpdateDescription}
          onUpdateTags={this.onUpdateTags}
          onDelete= {this.onDeleteTags} />
        <Link to="/pageB">Page B</Link>
        <Link to="/pageA">Page A</Link>
      </div>
    );
  }
}

export const updateDescription = (field: string, value: any) => (state: State) => ({
  ...state,
  [field]: value

});

export const updateTags = (field: string, value: string) => (state: State) => ({
  ...state,
  tags: [...state.tags, value]
});


export const onDeleteTags = (field: string, value: string[]) => (state: State) => ({
  ...state,
  tags: value
});
