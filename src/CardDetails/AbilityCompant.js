import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '0.5em',
      padding: '0.5em',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: 'rgba( 21, 21, 21, 0.25 )',
      boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
      backdropFilter: 'blur( 4px )',
      borderRadius: '10px',
      border: '1px solid rgba( 255, 255, 255, 0.18 )',
      
  },
  image: {
    width: "100%",
  },
  imageContainer: {
    display: "flex",
    width: 50,
    overflow: 'hidden',
    borderRadius: '0.5em',
    border: '2px solid #f8f8f8'
  },
});

const AbilityCompact = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.imageContainer}>
        <img className={classes.image} src="/Pictures/arc-lightning.jpg" />
      </div>
      <div className={classes.name}> Ability Name</div>
    </div>
  );
};

export default AbilityCompact;
