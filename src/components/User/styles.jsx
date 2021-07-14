import { makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme) => ({
  userShow: {
    flex: '1',
    padding: '20px',
    webkitBoxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
    boxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
  },
  userShowTop: {
    display: 'flex',
    alignItems: 'center',
  },
  userShowImg: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
  },
}));
