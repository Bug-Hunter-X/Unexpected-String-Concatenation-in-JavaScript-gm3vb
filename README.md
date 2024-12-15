# Unexpected String Concatenation in JavaScript

This repository demonstrates a common yet subtle bug in JavaScript related to type coercion and the `+` operator.  The issue arises from JavaScript's loose typing system, where the `+` operator behaves differently depending on the operands' types.

## The Bug

The provided `foo` function intends to add two numbers. However, if one of the arguments is a string, JavaScript performs string concatenation instead of numerical addition.  This leads to unexpected results.

## The Solution

The solution involves explicitly converting the arguments to numbers using `parseInt()` or `Number()` before performing the addition. This ensures that the `+` operator always performs numerical addition.