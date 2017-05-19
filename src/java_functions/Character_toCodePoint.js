const MIN_HIGH_SURROGATE = 0xD800;
const MIN_LOW_SURROGATE  = 0xDC00;
const MIN_SUPPLEMENTARY_CODE_POINT = 0x010000;

module.exports = function(high, low) {
    return ((high - MIN_HIGH_SURROGATE) << 10) + (low - MIN_LOW_SURROGATE) + MIN_SUPPLEMENTARY_CODE_POINT;
}
