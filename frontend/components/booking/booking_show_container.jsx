import {connect} from 'react-redux';
import BookingShow from './booking_show';
import {fetchBooking, updateBooking, deleteBooking} from '../../actions/booking_actions';
import {logout} from '../../actions/session_actions';

const mSP = ({entities, session}, ownProps) => {
  // debugger;  //there are no spots in entities here at the moment
  return {
    booking: entities.bookings[ownProps.match.params.bookingId],
    spots: entities.spots,
    currentUser: entities.users[session.id]
  }
};

const mDP = dispatch => {
  return {
    fetchBooking: bookingId => dispatch(fetchBooking(bookingId)),
    updateBooking: booking => dispatch(updateBooking(booking)),
    deleteBooking: bookingId => dispatch(deleteBooking(bookingId)),
    logout: () => dispatch(logout())
  }
};

export default connect(mSP, mDP)(BookingShow);