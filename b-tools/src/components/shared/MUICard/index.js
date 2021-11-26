import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import PropTypes from 'prop-types';

function MUICard(props) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent style={{ padding: props.padding + 'px' }}>
        {props.children}
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}

MUICard.defaultProps = {
  padding: 0,
  children: 0,
};
MUICard.propTypes = {
  padding: PropTypes.number,
  children: PropTypes.node,
};
export default MUICard;
