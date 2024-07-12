document.getElementById('generateButton').addEventListener('click', function() {
    const length = document.getElementById('length').value;
    const includeLowercase = document.getElementById('lowercase').checked;
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSpecial = document.getElementById('special').checked;
  
    if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecial) {
        alert('You must select at least one character type.');
        return;
    }
  
    const password = generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSpecial);
    document.getElementById('passwordDisplay').textContent = password;
  });
  
  function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSpecial) {
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';
    let charPool = '';
  
    if (includeLowercase) {
        charPool += lowercaseChars;
    }
    if (includeUppercase) {
        charPool += uppercaseChars;
    }
    if (includeNumbers) {
        charPool += numberChars;
    }
    if (includeSpecial) {
        charPool += specialChars;
    }
  
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charPool.length);
        password += charPool[randomIndex];
    }
  
    return password;
  }
  