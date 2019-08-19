/* eslint camelcase: 0 */
/* eslint @typescript-eslint/camelcase: 0 */

/**
 *
 * Approved payment details from paypal
{
  "create_time": "2019-08-19T20:42:09Z",
  "update_time": "2019-08-19T20:42:09Z",
  "id": "41T15296M1047184E",
  "intent": "CAPTURE",
  "status": "COMPLETED",
  "payer": {
    "email_address": "test@test.test",
    "payer_id": "2BXXP58KE2ZMA",
    "address": {
      "country_code": "US"
    },
    "name": {
      "given_name": "Test",
      "surname": "Test"
    }
  },
  "purchase_units": [
    {
      "reference_id": "default",
      "soft_descriptor": "PAYPAL *INFOBOXSTES",
      "amount": {
        "value": "0.01",
        "currency_code": "GBP"
      },
      "payee": {
        "email_address": "info@decorativeprogressive.com",
        "merchant_id": "X75SM4VSYL8CA"
      },
      "shipping": {
        "name": {
          "full_name": "Test Test"
        },
        "address": {
          "address_line_1": "Street",
          "address_line_2": "Address",
          "admin_area_2": "City",
          "admin_area_1": "HI",
          "postal_code": "46965",
          "country_code": "US"
        }
      },
      "payments": {
        "captures": [
          {
            "status": "COMPLETED",
            "id": "2KA22474KG571140S",
            "final_capture": true,
            "create_time": "2019-08-19T20:42:09Z",
            "update_time": "2019-08-19T20:42:09Z",
            "amount": {
              "value": "0.01",
              "currency_code": "GBP"
            },
            "seller_protection": {
              "status": "ELIGIBLE",
              "dispute_categories": [
                "ITEM_NOT_RECEIVED",
                "UNAUTHORIZED_TRANSACTION"
              ]
            },
            "links": [
              {
                "href": "https://api.sandbox.paypal.com/v2/payments/captures/2KA22474KG571140S",
                "rel": "self",
                "method": "GET",
                "title": "GET"
              },
              {
                "href": "https://api.sandbox.paypal.com/v2/payments/captures/2KA22474KG571140S/refund",
                "rel": "refund",
                "method": "POST",
                "title": "POST"
              },
              {
                "href": "https://api.sandbox.paypal.com/v2/checkout/orders/41T15296M1047184E",
                "rel": "up",
                "method": "GET",
                "title": "GET"
              }
            ]
          }
        ]
      }
    }
  ],
  "links": [
    {
      "href": "https://api.sandbox.paypal.com/v2/checkout/orders/41T15296M1047184E",
      "rel": "self",
      "method": "GET",
      "title": "GET"
    }
  ]
}
*/
interface Amount {
    currency_code: string;
    value: string;
    breakdown?: {
        item_total: {
            currency_code: string;
            value: string;
        };
    };
}

interface Item {
    name: string;
    unit_amount: Amount;
    quantity: number;
    description: string;
}

interface PurchaseUnit {
    amount: Amount;
    items: Item[];
}

interface CreateParams {
    purchase_units: PurchaseUnit[];
}

interface Order {
    create(params: CreateParams): () => void;
    capture(): Promise<string>;
}

interface Actions {
    order: Order;
}

interface ButtonsParams {
    createOrder(data: void, actions: Actions): () => void;
    onApprove(data: void, actions: Actions): Promise<string>;
}

interface Window {
    paypal: {
        Buttons(params: ButtonsParams): {
            render: (selector: string) => {};
        };
    };
}

declare let window: Window;

export default () => window.paypal.Buttons({
    async onApprove(data, actions): Promise<string> {
        const details = await actions.order.capture();

        return details;
    },
    createOrder(data, actions) {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    currency_code: 'GBP',
                    value: '0.01',
                    breakdown: {
                        item_total: {
                            currency_code: 'GBP',
                            value: '0.01',
                        },
                    },
                },
                items: [{
                    name: 'blablabla',
                    unit_amount: {
                        currency_code: 'GBP',
                        value: '0.01',
                    },
                    quantity: 1,
                    description: 'more blablabla',
                }],
            }],
        });
    },
});
