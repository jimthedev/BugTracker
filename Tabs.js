import React from "react";

const styles = {
  tab: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center"
  },
  flex: {
    flex: 1
  }
};

class TabList extends React.Component {
  render() {
    const { ContainerComponent, FooterComponent, FooterTabComponent, LinkComponent } = this.props;
    const children = React.Children.map(this.props.children, (child, index) => {
      return React.cloneElement(child, {
        isActive: index === this.props.activeIndex,
        onPress: () => {
          this.props.onActivate(index);
        },
        FooterTabComponent,
        ContainerComponent,
        LinkComponent
      });
    });

    return (
      <FooterComponent style={styles.tabs}>
        {children}
      </FooterComponent>
    );
  }
}

class Tab extends React.Component {
  render() {
    const {
      route,
      ContainerComponent,
      FooterTabComponent,
      LinkComponent
    } = this.props;
    return (
      <FooterTabComponent>
        <LinkComponent
          to={route}
          underlayColor="transparent"
          style={styles.flex}
        >
          <ContainerComponent style={styles.flex}>
            {this.props.children}
          </ContainerComponent>
        </LinkComponent>
      </FooterTabComponent>
    );
  }
}

class TabPanels extends React.Component {
  render() {
    const { ContainerComponent } = this.props;
    return (
      <ContainerComponent style={styles.tabPanels}>
        {this.props.children}
      </ContainerComponent>
    );
  }
}

class TabPanel extends React.Component {
  render() {
    const { ContainerComponent } = this.props;
    return (
      <ContainerComponent>
        {this.props.children}
      </ContainerComponent>
    );
  }
}

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: !!props.initialIndex ? props.initialIndex : 0
    };
  }
  render() {
    const { ContainerComponent, FooterComponent, FooterTabComponent, LinkComponent } = this.props;
    const children = React.Children.map(this.props.children, (child, index) => {
      if (child.type === TabPanels) {
        return React.cloneElement(child, {
          activeIndex: this.state.activeIndex,
          ContainerComponent
        });
      } else if (child.type === TabList) {
        return React.cloneElement(child, {
          activeIndex: this.state.activeIndex,
          onActivate: activeIndex => this.setState({ activeIndex }),
          ContainerComponent,
          FooterComponent,
          FooterTabComponent,
          LinkComponent
        });
      } else {
        return child;
      }
    });

    return (
      <ContainerComponent>
        {children}
      </ContainerComponent>
    );
  }
}

export { TabList, TabPanels, TabPanel, Tab, Tabs };
