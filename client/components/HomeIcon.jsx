import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import SvgIcon from '@material-ui/core/SvgIcon'

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  icon: {
    margin: theme.spacing.unit * 2
  }
})

function HomeIcon (props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  )
}

function SvgIcons (props) {
  const {classes} = props
  return (
    <div className={classes.root}>
      <HomeIcon className={classes.iconHover} color="primary" style={{fontSize: 30}}/>
    </div>
  )
}

SvgIcons.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SvgIcons)
