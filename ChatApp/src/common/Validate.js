const emailRegex = /^(([a-zA-Z0-9-_.]+(\.[a-zA-Z0-9]+)*)([a-zA-Z0-9@])|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
class Validate {
  constructor() {
    this.emailRegex = emailRegex;
  }

  isEmpty(...data) {
    for (let i = 0; i < data.length; i++) {
      if (!data[i]) return true;
    }
    return false;
  }

  isEmail(emailStr) {
    const email = emailStr.trim();
    var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(String(email).toLowerCase());
  }

  isValidPasswordLength(password) {
    const VALID_MIN_LENGTH = 8;
    const VALID_MAX_LENGTH = 12;
    return (
      password.length >= VALID_MIN_LENGTH && password.length <= VALID_MAX_LENGTH
    );
  }
  isValidnumber(password) {
    const pattern = /[0-9]/;
    return !!pattern.test(password);
  }
  isValidUpper(password) {
    const pattern = /[A-Z]/;
    return !!pattern.test(password);
  }
  isValidLower(password) {
    const pattern = /[a-z]/;
    return !!pattern.test(password);
  }
  isValidSpecialCharacter(password) {
    const pattern = /[\W]{1,}/;
    return !!pattern.test(password);
  }
  isSvgImage(file) {
    var svgExtensions = /(\.svg)$/i;
    if (svgExtensions.exec(file)) {
      return true;
    }
    return false;
  }
  isImage(file) {
    var imageExtensions = /(\.jpg|\.jpeg|\.png)$/i;
    if (imageExtensions.exec(file)) {
      return true;
    }
    return false;
  }

  isValidName(nameStr) {
    const name = nameStr.trim();
    const nameRegex = /^[a-zA-Z_-\s]*$/;
    return nameRegex.test(String(name));
  }

  isEmptyArray(item) {
    return !Array.isArray(item) || !item.length ? true : false;
  }

  mergeArray(arr) {
    let foo = new Map();
    for (const item of arr) {
      foo.set(item.key, item);
    }
    let final = [...foo.values()];
    return final;
  }

  capitalizeWords(str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  formatNumber(number) {
    number = number + '';
    x = number.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, '$1' + '.' + '$2');
    }
    return x1 + x2;
  }

  validURL(str) {
    var pattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$',
      'i',
    ); // fragment locator
    return !!pattern.test(str);
  }

  validLabelUserCard(item) {
    if (!item) return;
    return `${item.paymentMethod} ${item.cardNumber.substring(
      item.cardNumber.length - 4,
      item.cardNumber.length,
    )}`;
  }

  validPhone(str) {
    const phoneNumber = str.trim();
    var pattern = /((\+84)|0)[0-9]{9,12}$/;
    return !!pattern.test(phoneNumber);
  }
  validPhoneNumber(input) {
    var phoneNo = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (input.match(phoneNo)) {
      return true;
    } else {
      return false;
    }
  }

  formatDistance(number) {
    if (number > 1000000) {
      return (number / 1000).toFixed(0) + ' km';
    }
    if (number > 1000) {
      return (number / 1000).toFixed(1) + ' km';
    } else {
      return number + ' m';
    }
  }

  formatMoney(number) {
    const num = Number.parseFloat(number).toFixed(0);
    if (num) {
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    } else {
      return 0;
    }
  }
}

export default new Validate();
