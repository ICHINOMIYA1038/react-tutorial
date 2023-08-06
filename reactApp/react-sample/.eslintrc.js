("use strict");
const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: ["react", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  rules: {
    "prettier/prettier": ERROR, // prettier拡張
    "no-var": ERROR, // var禁止
    "object-shorthand": [ERROR, "always"], // オブジェクト定義時にショートハンド利用
    "prefer-arrow-callback": ERROR, // コールバックにはアロー関数を利用
    "prefer-const": [ERROR, { destructuring: "all" }], // 再代入を行わない変数はconstを利用
    "prefer-numeric-literals": ERROR, // parseInt() を文字列と基数を指定して利用しない
    "prefer-rest-params": ERROR, // arguments の代わりに残余引数を利用
    "prefer-spread": ERROR, // Function.prototype.apply() の代わりにスプレッド演算子を利用
    "prefer-destructuring": [
      ERROR,
      {
        // ローカル変数にプロパティを代入する際に分割代入を利用
        array: true,
        object: true,
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    "arrow-body-style": [
      ERROR,
      "as-needed",
      { requireReturnForObjectLiteral: false },
    ],
    "no-await-in-loop": ERROR, // ループ内でawaitを使わない
    "no-compare-neg-zero": ERROR, // -0を比較に使わない
    "no-cond-assign": ERROR, // 条件処理内で代入を行わない
    "no-constant-condition": ERROR, // 条件判定文が定数のみの判定にしない1
    "no-control-regex": ERROR, // 正規表現内で制御文字を使用しない
    "no-debugger": ERROR, // debuggerを使用しない
    "no-dupe-args": ERROR, // function 内で重複して変数宣言を行わない
    "no-dupe-keys": ERROR, // オブジェクト内で重複するキーを指定しない
    "no-duplicate-case": ERROR, // 重複するcase文を作らない
    "no-empty-character-class": ERROR, // 正規表現内で空文字クラスを使用しない
    "no-empty": [ERROR, { allowEmptyCatch: true }], // 空ブロックを作らない
    "no-ex-assign": ERROR, // catch文内で例外変数に再代入を行わない
    "no-extra-boolean-cast": ERROR, // 不要なboolean型キャストを行わない
    "no-func-assign": ERROR, // functionを再定義しない
    "no-inner-declarations": ERROR, // ネストしたブロック内で変数および関数の宣言を行わない
    "no-invalid-regexp": ERROR, // RegExpコンストラクタに不正な正規表現文字列を指定しない
    "no-irregular-whitespace": ERROR, // 規格外の空白文字の使用しない
    "no-obj-calls": ERROR, // 組み込みオブジェクトを関数のように使用しない
    "no-prototype-builtins": ERROR, // オブジェクトインスタンスからObject.prototypeの組み込み関数呼び出しを行わない
    "no-regex-spaces": ERROR, // 正規表現において複数スペースを使用しない
    "no-sparse-arrays": ERROR, // 配列においてまばらな値設定を行わない
    "no-template-curly-in-string": ERROR, // 通常文字列中においてテンプレートリテラルを使用しない
    "no-unreachable": ERROR, // 到達不可能なコードを記述しない
    "no-unsafe-finally": ERROR, // 	finally句内において制御文を使用しない
    "no-unsafe-negation": ERROR, // 関係演算子の左側において否定演算子の使用しない
    "use-isnan": ERROR, // NaNチェックにはisNaN()を利用する
    "valid-typeof": [ERROR, { requireStringLiterals: true }], // typeof利用時は正しい型名文字列と比較する
    "no-unexpected-multiline": ERROR, // 紛らわしい複数行コード記述を行わない
    "accessor-pairs": ERROR, // getter とsetter はペアで作成する
    "array-callback-return": ERROR, // 配列の組み込み関数のコールバックでは必ずreturnを記述する
    "block-scoped-var": ERROR, // 宣言した変数は宣言したブロックスコープ内で利用する
    complexity: WARNING, // 循環的複雑度が規定値(デフォルト20)以内であること
    "class-methods-use-this": [ERROR, { exceptMethods: [] }], // クラスメソッド中においてthisが使われている
    "consistent-return": ERROR, // returnする型は常に一致させるか全く使わないこと
    curly: ERROR, // 波括弧の省略を行わないこと
    "default-case": ERROR, // switch文では必ずdefaultケースを作成すること
    "dot-notation": ERROR, // オブジェクトプロパティのアクセスは角括弧ではなくドットでアクセスすること
    "dot-location": [ERROR, "property"], // 改行前にドットを記述すること
    eqeqeq: ERROR, // 型を含めた比較演算子を利用する
    "guard-for-in": ERROR, // for in ループではループしているオブジェクト自身のプロパティかどうかのチェックを行う
    "no-alert": ERROR, // alert, prompt, confirm を使わない
    "no-caller": ERROR, // arguments.caller, arguments.callee を使用しない
    "no-case-declarations": ERROR, // case, default 節の中で 語彙的宣言(let, const, function, class) を行わない
    "no-else-return": ERROR, // return を含む if文中 に不要な else 文を作らない
    "no-empty-pattern": ERROR, // 値の入らない分割代入を記述しない
    "no-eq-null": ERROR, // null または undefined と比較するときは厳密な比較演算子を利用する
    "no-eval": ERROR, // eval を使わないこと
    "no-extend-native": ERROR, // ネイティブオブジェクトを拡張しない
    "no-extra-bind": ERROR, // 不必要な bind() を行わないこと (アロー関数への適用、thisを含まない関数への適用を禁止)
    "no-extra-label": ERROR, // 不必要なラベル記述を行わないこと
    "no-fallthrough": ERROR, // switch文で下のcaseに流れ落ちるコードを作らないこと
    "no-global-assign": ERROR, // グローバルオブジェクトや読み取り専用オブジェクトに対する代入を行わない
    "no-implicit-coercion": ERROR, // 型変換のショートハンドは利用しない
    "no-implied-eval": ERROR, // 暗黙的eval()を使用しない
    "no-iterator": ERROR, // _iterator_拡張メソッドは利用しない
    "no-labels": ERROR, // ラベル文は使用しない
    "no-lone-blocks": ERROR, // 不必要なコードブロックを作らない
    "no-loop-func": ERROR, // ループ内においてブロック変数を利用する関数定義を行わない
    "no-multi-str": ERROR, // 複数行文字列定義を行わない
    "no-new-func": ERROR, // Function のコンストラクタに文字列を渡さない
    "no-new-wrappers": ERROR, // プリミティブオブジェクトのラッパークラス(String, Number, Boolean)をインスタンス化しない
    "no-new": ERROR, // 変数代入を行わないインスタンス生成をしない
    "no-octal-escape": ERROR, // 文字列において8進数エスケープは行わない
    "no-octal": ERROR, // 8進数表記を使用しない
    "no-proto": ERROR, // __proto__を使用しない
    "no-redeclare": ERROR, // 同じ変数名を再定義しない
    "no-return-assign": [ERROR, "always"], // return宣言時に変数代入を行わない
    "no-return-await": ERROR, // async functionでreturnawaitの記載はしない
    "no-script-url": ERROR, // JavaScript URL (javascript:で始まるコード) を使用しない
    "no-self-assign": [ERROR, { props: true }], // 自分自身に再代入しない
    "no-self-compare": ERROR, // 自分自身との比較は行わない
    "no-sequences": ERROR, // カンマ演算子を使用しない
    "no-throw-literal": ERROR, // throwでリテラルを返さない
    "no-unmodified-loop-condition": ERROR, // ループ変数はブロック内で変更を行う
    "no-unused-expressions": ERROR, // 意味のない式は記述しない
    "no-unused-labels": ERROR, // どこからも使われないラベルを作らない
    "no-useless-call": ERROR, // 無駄なcall(), apply()を行わない
    "no-useless-concat": ERROR, // 無駄な文字列結合は行わない
    "no-useless-escape": ERROR, // 無駄なエスケープは行わない
    "no-useless-return": ERROR, // 	無駄なreturnは書かない
    "no-void": ERROR, // undefinedを得るためにvoidを使わない
    "no-warning-comments": WARNING, // 特定文字列(todo, fixme, xxx)を含むコメントは除去されていること
    "no-with": ERROR, // with文は使わないこと
    "prefer-promise-reject-errors": [ERROR, { allowEmptyReject: true }], // 明らかなError以外の値を渡してPromiseを失敗状態にする事を禁止する
    radix: ERROR, // parseInt() を使用するときは基数を指定する
    yoda: ERROR, // ヨーダ記法で書かない
    "no-delete-var": ERROR, // 変数宣言したものはdeleteしない
    "no-label-var": ERROR, // 同一スコープ内において変数とラベルに同じ名使わない
    "no-restricted-globals": [ERROR, "event"], // evet など特定のグローバル変数に値代入を行わない
    "no-shadow-restricted-names": ERROR, // 予約済みグローバル変数(NaN, Infinity, undefined など)に代入を行わない
    "no-undef-init": ERROR, // 変数定義時にundefinedで初期を行わない
    "no-undef": [ERROR, { typeof: true }], // 未定義の変数は利用しない
    "no-unused-vars": [
      // 未使用の定義(変数、関数)は削除する
      ERROR,
      { argsIgnorePattern: "^_+$", ignoreRestSiblings: true },
    ],
    "no-use-before-define": [ERROR, "nofunc"], // 定義より前に使用しない
    "handle-callback-err": [WARNING, "err"], // callbackパターンを記述する際、エラー処理を記載する
    "no-mixed-requires": [ERROR, { grouping: true, allowCall: true }], // require()で定義する変数とその他の変数は分けて宣言する
    "no-new-require": ERROR, // require()したオブジェクトを直接newしない
    "no-path-concat": ERROR, // 	__dirname, __filename を直接文字列結合して利用しない
    "no-restricted-imports": [
      // 指定されたモジュールのimportは行わない
      "error",
      "domain",
      "freelist",
      "smalloc",
      "sys",
      "colors",
    ],
    "no-restricted-modules": [
      // 指定したモジュールを使用しない
      "error",
      "domain",
      "freelist",
      "smalloc",
      "sys",
      "colors",
    ],
    // camelcase: [ERROR, { properties: 'always' }], // 変数名はキャメルケースで記述する
    "padding-line-between-statements": [
      ERROR,
      { blankLine: "always", prev: "*", next: "return" },
    ],
    "eol-last": ERROR, // ファイルの最後には空行を入れる
    "func-name-matching": ERROR, // 関数を使用する際は定義済みの名前を使用する
    "func-names": [ERROR, "never"], // 無名関数は作らない
    "linebreak-style": [ERROR, "unix"], // 改行は LF (line feed) にする
    "max-depth": WARNING, // ネストできるブロック深さは4つ以内とする
    "max-nested-callbacks": [WARNING, 4], // ネストできるコールバックは4段以内とする
    "max-params": [WARNING, { max: 4 }], // 引数のパラメータ数は4個以内とする
    "new-cap": [ERROR, { newIsCap: true, capIsNew: true }], // newするオブジェクトは大文字始まりのオブジェクトとなっていること
    "no-array-constructor": ERROR, // Arrayクラスを使った配列値を指定した初期化を行わない
    "no-lonely-if": ERROR, // elseブロック内に単独のif文を記述しない
    "no-mixed-operators": ERROR, // 複数の演算子グループを括弧なしで混在して記述しない
    "no-mixed-spaces-and-tabs": ERROR, // インデントにタブと空白を混在させない
    "no-multi-assign": ERROR, // 複数の代入式を連鎖させる書き方を禁止する
    "no-negated-condition": ERROR, // else句を持つif文は否定構文で記述しないこと
    "no-new-object": ERROR, // Objectクラスのコンストラクタは利用しない
    "no-restricted-syntax": [ERROR, "WithStatement"], // 	function宣言やwith句など指定された記述方法は行わない
    "no-unneeded-ternary": ERROR, // 変数初期化で無駄な3項演算子を使わない
    "one-var": [ERROR, "never"], // ブロックスコープ内では1度の宣言で必要な変数宣言を行う
    "one-var-declaration-per-line": ERROR, // 定数定義は定数毎に改行する
    "operator-assignment": [ERROR, "always"], // ショートハンドが使える場合はショートハンドで記載する
    "spaced-comment": [
      // コメントの先頭には空白を入れる
      ERROR,
      "always",
      {
        line: { exceptions: ["-"] },
        block: { markers: ["!"], balanced: true },
      },
    ],
    "unicode-bom": [ERROR, "never"], // ユニコードのBOMは入れない
    "constructor-super": ERROR, // 	継承しているクラスのコンストラクタではsuper()を呼び出しており、継承していないクラスのコンストラクタではsuper()を呼び出していないこと
    "no-class-assign": ERROR, // 定義したクラス名を変数として再利用する場合、同一行にコメントする
    "no-const-assign": ERROR, // const定義された変数の再定義を行わない
    "no-dupe-class-members": ERROR, // クラスメンバーの名前は重複させない
    "no-new-symbol": ERROR, // Symbolオブジェクトをnewで生成しない
    "no-this-before-super": ERROR, // super()を呼び出す前にthisまたはsuperを使わない
    "no-useless-computed-key": ERROR, // 不要な算術プロパティ表記は行わない
    "no-useless-constructor": ERROR, // 何もしないコンストラクタ または 親クラスのコンストラクタを呼び出すだけのコンストラクタ は記述しない
    "no-useless-rename": ERROR, // import, export, 分割代入において変数名を変更しない
    "require-yield": ERROR, // ジェネレータ関数にはyieldを含める
    "symbol-description": ERROR, // 	Symbolを生成するときは名称指定する
    "template-curly-spacing": ERROR, // テンプレートリテラルで利用する波括弧の内側には空白を入れない

    "react/prefer-stateless-function": ERROR, // 極力stateless functional componentを使う
    "react/jsx-boolean-value": ERROR, // boolのpropsの代入記述を省略
    "react/jsx-filename-extension": [
      ERROR,
      { extensions: [".ts", ".tsx", ".jsx"] },
    ],
    "react/jsx-handler-names": WARNING, // イベントハンドラに無名関数を使わない
    "react/prefer-es6-class": [ERROR, "always"], // ES6のクラス記法を使う
    "react/display-name": OFF,
    "react/forbid-prop-types": ERROR, // 特定のpropTypeを禁止
    "react/jsx-closing-bracket-location": OFF, // 閉じタグの位置を強制
    "react/jsx-curly-spacing": ERROR, // 中括弧内に半角スペースを入れる
    "react/jsx-indent-props": [ERROR, 2], // propsのインデントは半角スペース2
    "react/jsx-max-props-per-line": [ERROR, { maximum: 4, when: "multiline" }],
    "react/jsx-no-duplicate-props": ERROR, // propsの重複禁止
    "react/jsx-no-literals": OFF, // ラップされていないJSX文字列の使用を禁止
    "react/jsx-no-undef": ERROR, // 未定義の変数使用禁止
    "react/jsx-sort-prop-types": OFF, // prop-typesをアルファベット順にする
    "react/jsx-sort-props": OFF, // propsをアルファベット順にする
    "react/no-danger": ERROR, // 危険なJSXプロパティの使用を禁止する
    "react/no-did-mount-set-state": ERROR, // componentDidMountでsetStateを使用しない
    "react/no-did-update-set-state": ERROR, // componentDidUpdateでsetStateを使用しない
    "react/no-direct-mutation-state": ERROR, // this.stateの直接変更禁止
    "react/no-multi-comp": OFF, // 1ファイルに複数のコンポーネントを定義しない
    "react/no-set-state": OFF, // setStateの使用を禁止
    "react/no-unknown-property": ERROR, // 謎のDOMプロパティの使用を禁止
    "react/prop-types": OFF, // prop-typesを必ず定義する
    "react/react-in-jsx-scope": ERROR, // jsxはReactを必ずimportする
    "react/self-closing-comp": ERROR, // 子なしのコンポーネントに余分な終了タグを付けない
    "react/sort-comp": ERROR, // コンポーネントメソッドの順序を強制
    "react/wrap-multilines": OFF, // JSXが複数行に渡る場合は括弧でまとめる

    "@typescript-eslint/camelcase": OFF,
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "react-hooks/exhaustive-deps": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
  },
};
