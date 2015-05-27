// Sweet.js v0.7.4

macro (+.) {
  rule infix {
    $one:expr | $two:expr
  } => {
    function() {
        return $one($two.apply(this, arguments));
    }
  }
}

macro (+|) {
  rule infix {
    $one:expr | $two:expr
  } => {
    function() {
        return $two($one.apply(this, arguments));
    }
  }
}

export (+.)
export (+|)
