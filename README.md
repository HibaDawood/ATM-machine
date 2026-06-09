# 🏧 CLI ATM Machine

[![npm version](https://img.shields.io/npm/v/h5b_atm_automated_teller_machine.svg?style=flat-square)](https://www.npmjs.com/package/h5b_atm_automated_teller_machine)

An interactive, command-line based Automated Teller Machine (ATM) simulator built with TypeScript and Node.js. It features secure PIN authentication, real-time balance checking, and smart withdrawal safety limits.

## ✨ Features

* **Secure PIN Authentication:** Simulates a real banking login verification system.
* **Smart Withdrawal Validation:** Prevents over-drafting by checking if the requested amount exceeds the current balance.
* **Interactive Options Menu:** Clean navigation between functions using the inquirer list prompt.
* **Vibrant Interface:** Error messages and success logs are clearly highlighted using chalk.

## 🛠️ Architecture Flow

Authentication Check ➡️ Select Operation ➡️ Check Balance / Withdraw Amount ➡️ Balance Verification

## 🛠️ Tech Stack

* **Language:** TypeScript & Node.js
* **Dependencies:** inquirer, chalk

## 🚀 How to Run & Use

Run this application directly in your terminal using `npx`:

```bash
npx h5b_atm_automated_teller_machine
