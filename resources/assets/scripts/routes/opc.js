export default {
  init() {
    jQuery('.quantity-change').click(function(event) {
      event.preventDefault();

      let $this = jQuery(this);
      let amount = $this.data('amount');
      let subtract = $this.data('subtract');
      let input = $this.parents('.product-item').find('input.qty');

      if (input) {
        let currentValue = Number(input.val());
        let newTotal = false;

        // Calculate the new total
        if (subtract) {
          newTotal = Number(currentValue) - amount;
        } else {
          newTotal = Number(currentValue) + amount;
        }

        // As long as the new total is over 0...
        // Trigger a change!
        if (newTotal >= 0) {
          input.val(newTotal);
          input.trigger('change');
        }
      }
    });
  },
  finalize() {
    // JavaScript to be fired on the home page, after the init JS
  },
};
