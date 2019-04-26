import { DatePicker } from 'material-ui-pickers';

export default ({ datePickerRef, onChange, date }) => {
  return (
    <div>
      <DatePicker TextFieldComponent={() => null} ref={datePickerRef} disableFuture value={date} onChange={onChange} animateYearScrolling />
    </div>
  );
};
