// Sweet.js v0.7.4

macro +. {
  rule infix {
    $outer:expr | $inner:expr
  } => {
    function() {
        return $outer($inner.apply(this, arguments));
    }
  }
}

export +.
