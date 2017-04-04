public class IntShuffleIterator {
    public enum State {SequenceStart, SequenceMiddle};

    public IntShuffleIterator(long size) {
        assert(size > 0);

        this.lfsr = new LinearFeedbackShiftRegister(64 - Long.numberOfLeadingZeros(size), 1);
        this.size = size;
    }

    public State get_state() {
        return lfsr.get() == 1 ? State.SequenceStart : State.SequenceMiddle;
    }

    public long get() {
        // The lfsr returns a number in the range from 1 to 2^bits-1, inclusive.
        // We need to subtract one to get something in the range from 0 to 2^bits-2, inclusive.
        return lfsr.get() - 1;
    }

    public void next() {
        // Skip values until we get to one that's in range
        do {
            lfsr.next();
        } while (lfsr.get() > size);
    }

    private LinearFeedbackShiftRegister lfsr;
    private long size;
};
