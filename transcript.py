from youtube_transcript_api import YouTubeTranscriptApi
video_id="PLmehCF1Wx8"
srt = YouTubeTranscriptApi.get_transcript(video_id)
trans=""
       
for i in srt:
    trans+= i['text']+" "
with open("transcript.pdf", "w") as f:
    f.write(trans)
   
   