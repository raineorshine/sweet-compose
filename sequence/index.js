// Sweet.js v0.7.4

macro +| {
  rule infix {
    $inner:expr | $outer:expr
  } => {
    function() {
        return $inner($outer.apply(this, arguments));
    }
  }
}

export +|
