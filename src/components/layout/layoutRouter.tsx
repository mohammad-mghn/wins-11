interface Props {
  conditions: boolean[];
  components: JSX.Element[];
  defaultComponent: JSX.Element;
}

const LayoutRouter = (props: Props) => {
  const { conditions, components, defaultComponent } = props;

  switch (true) {
    case conditions[0]:
      return components[0];

    case conditions[1]:
      return components[1];

    case conditions[2]:
      return components[2];

    default:
      return defaultComponent;
  }
};

export default LayoutRouter;
