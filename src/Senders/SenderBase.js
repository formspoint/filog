/**
 * @fileOverview Base Sender class.
 */

/**
 * SenderBase is an "abstract" class defining the sender interface.
 */
const SenderBase = class {
  /**
   * The single method for a sender: send data somewhere.
   *
   * @param {int} level
   *   One of the 8 RFC5424 levels: 0 to 7.
   * @param {string} message
   *   Unlike LoggerBase::log(), it is not expected to handler non-string data.
   * @param {object} context
   *   A log event context object.
   * @returns {void}
   */
  send() {}
};

export default SenderBase;
