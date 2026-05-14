# in this lecture, we are going to study about differnet methods of ReadableStreams

1. setEncoding() . repsonsible to tell our steam which encoding to prefer . For ex - utf-8
2. destroy(). used to eliminate stream. Whenever we destroy stream, event listen **close** trrigger.
3. **end** event holds priority over **close** event. But when destroy happen, only close event trigger.
4. **error** event fire when there's error occur in stream. It also trigger when we are destroying stream.

5. **open** event trigger when we open our file which is passed in our readable stream. 
6. **ready** event

