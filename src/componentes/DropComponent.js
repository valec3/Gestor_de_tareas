const DropComponent = () => {

  const [ enabled, setEnabled ] = React.useState(false);

  React.useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));

    return () => {
        cancelAnimationFrame(animation);
        setEnabled(false);
    };
  }, []);

  if (!enabled) {
      return null;
  }

  return (
    <Droppable droppableId={...}>
        { .... }
    </Droppable>
  );
}