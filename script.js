
const noteVector=['C1','Db1','D1','Eb1','E1','F1','Gb1','G1','Ab1','A1','Bb1','B1',
'C2','Db2','D2','Eb2','E2','F2','Gb2','G2','Ab2','A2','Bb2','B2',
'C3','Db3','D3','Eb3','E3','F3','Gb3','G3','Ab3','A3','Bb3','B3',
'C4','Db4','D4','Eb4','E4','F4','Gb4','G4','Ab4','A4','Bb4','B4',
'C5','Db5','D5','Eb5','E5','F5','Gb5','G5','Ab5','A5','Bb5','B5']
'x^2+2x+3'

const keys = document.querySelectorAll('.key')
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')
let timeInterval;
let timeSongInterval;
let time=0;
let timeIntervalNote0;let timeIntervalNote1;let timeIntervalNote2;let timeIntervalNote3;let timeIntervalNote4;let timeIntervalNote5;let timeIntervalNote6;let timeIntervalNote7;let timeIntervalNote8;let timeIntervalNote9;
let timeIntervalNote10;let timeIntervalNote11;let timeIntervalNote12;let timeIntervalNote13;let timeIntervalNote14;let timeIntervalNote15;let timeIntervalNote16;let timeIntervalNote17;let timeIntervalNote18;let timeIntervalNote19;
let timeNote0=0;let timeNote1=0;let timeNote2=0;let timeNote3=0;let timeNote4=0;let timeNote5=0;let timeNote6=0;let timeNote7=0;let timeNote8=0;let timeNote9=0;
let timeNote10=0;let timeNote11=0;let timeNote12=0;let timeNote13=0;let timeNote14=0;let timeNote15=0;let timeNote16=0;let timeNote17=0;let timeNote18=0;let timeNote19=0;
let ended0=true;let ended1=true;let ended2=true;let ended3=true;let ended4=true;let ended5=true;let ended6=true;let ended7=true;let ended8=true;let ended9=true;
let ended10=true;let ended11=true;let ended12=true;let ended13=true;let ended14=true;let ended15=true;let ended16=true;let ended17=true;let ended18=true;let ended19=true;
let timeSong=0;
window.value=5;
enterNumber.addEventListener('click',song)

function song(){
  timeSong=-0.1;
  clearInterval(timeSongInterval)
  song=number.value.split([','])
  timeSongInterval=setInterval(()=>{
    timeSong=Math.round((timeSong+0.1)*10)/10;
    Timer.innerText=timeSong;
    for(i=0;i*3<song.length;i++){
      myNote=parseFloat(song[3*i]);
      tInicial=song[3*i+1]
      duration=song[3*i+2]
      if (timeSong==tInicial){
        ///////////////////////////////////////////////////
        if (ended0){
          duration0=duration;
          ended0=false;
          specifiedNote=noteVector[Math.ceil(60*myNote)-1]
          clearInterval(timeIntervalNote0)
          timeNote0=0;
          const whichNote = document.getElementById(specifiedNote)
          whichNote.currentTime=0
          whichNote.play()
          const graphNote=document.getElementById(specifiedNote+'Tile')
          graphNote.classList.add('active')
          timeIntervalNote0=setInterval(()=>{
            timeNote0=timeNote0+0.1;
            if(timeNote0>=parseFloat(duration0)){
              ended0=true;
              whichNote.addEventListener('pause', () => {
                graphNote.classList.remove('active')
              })
              whichNote.pause()
            }
          },100)
        }
        /////////////////////////////////////////////////////////
        else{
          if (ended1){
            duration1=duration;
            ended1=false;
            specifiedNote=noteVector[Math.ceil(60*myNote)-1]
            clearInterval(timeIntervalNote1)
            timeNote1=0;
            const whichNote = document.getElementById(specifiedNote)
            whichNote.currentTime=0
            whichNote.play()
            const graphNote=document.getElementById(specifiedNote+'Tile')
            graphNote.classList.add('active')
            timeIntervalNote1=setInterval(()=>{
              timeNote1=timeNote1+0.1;
              if(timeNote1>=parseFloat(duration1)){
                ended1=true;
                whichNote.addEventListener('pause', () => {
                  graphNote.classList.remove('active')
                })
                whichNote.pause()
              }
            },100)
          }
          ///////////////////////////////////////////////////////////////////////
          else{
            if (ended2){/////////////////////
              duration2=duration;
              ended2=false;
              specifiedNote=noteVector[Math.ceil(60*myNote)-1]
              clearInterval(timeIntervalNote2)////////////////////////
              timeNote2=0;//////////////
              const whichNote = document.getElementById(specifiedNote)
              whichNote.currentTime=0
              whichNote.play()
              const graphNote=document.getElementById(specifiedNote+'Tile')
              graphNote.classList.add('active')
              timeIntervalNote2=setInterval(()=>{//////////////////////////
                timeNote2=timeNote2+0.1;////////////////////////
                if(timeNote2>=parseFloat(duration2)){////////////////////////
                  ended2=true;///////////////////////////
                  whichNote.addEventListener('pause', () => {
                    graphNote.classList.remove('active')
                  })
                  whichNote.pause()
                }
              },100)
            }
            /////////////////////////////////////////////////////////////
            else{
              if (ended3){/////////////////////
                duration3=duration;
                ended3=false;
                specifiedNote=noteVector[Math.ceil(60*myNote)-1]
                clearInterval(timeIntervalNote3)////////////////////////
                timeNote3=0;//////////////
                const whichNote = document.getElementById(specifiedNote)
                whichNote.currentTime=0
                whichNote.play()
                const graphNote=document.getElementById(specifiedNote+'Tile')
                graphNote.classList.add('active')
                timeIntervalNote3=setInterval(()=>{//////////////////////////
                  timeNote3=timeNote3+0.1;////////////////////////
                  if(timeNote3>=parseFloat(duration3)){////////////////////////
                    ended3=true;///////////////////////////
                    whichNote.addEventListener('pause', () => {
                      graphNote.classList.remove('active')
                    })
                    whichNote.pause()
                  }
                },100)
              }
              //////////////////////////////////////////////////////////
              else{
                if (ended4){/////////////////////
                  duration4=duration;
                  ended4=false;
                  specifiedNote=noteVector[Math.ceil(60*myNote)-1]
                  clearInterval(timeIntervalNote4)////////////////////////
                  timeNote4=0;//////////////
                  const whichNote = document.getElementById(specifiedNote)
                  whichNote.currentTime=0
                  whichNote.play()
                  const graphNote=document.getElementById(specifiedNote+'Tile')
                  graphNote.classList.add('active')
                  timeIntervalNote4=setInterval(()=>{//////////////////////////
                    timeNote4=timeNote4+0.1;////////////////////////
                    if(timeNote4>=parseFloat(duration4)){////////////////////////
                      ended4=true;///////////////////////////
                      whichNote.addEventListener('pause', () => {
                        graphNote.classList.remove('active')
                      })
                      whichNote.pause()
                    }
                  },100)
                }
                else{
                  if (ended5){/////////////////////
                    duration5=duration;
                    ended5=false;
                    specifiedNote=noteVector[Math.ceil(60*myNote)-1]
                    clearInterval(timeIntervalNote5)////////////////////////
                    timeNote5=0;//////////////
                    const whichNote = document.getElementById(specifiedNote)
                    whichNote.currentTime=0
                    whichNote.play()
                    const graphNote=document.getElementById(specifiedNote+'Tile')
                    graphNote.classList.add('active')
                    timeIntervalNote5=setInterval(()=>{//////////////////////////
                      timeNote5=timeNote5+0.1;////////////////////////
                      if(timeNote5>=parseFloat(duration5)){////////////////////////
                        ended5=true;///////////////////////////
                        whichNote.addEventListener('pause', () => {
                          graphNote.classList.remove('active')
                        })
                        whichNote.pause()
                      }
                    },100)
                  }
                  else{
                    if (ended6){/////////////////////
                      duration6=duration;
                      ended6=false;
                      specifiedNote=noteVector[Math.ceil(60*myNote)-1]
                      clearInterval(timeIntervalNote6)////////////////////////
                      timeNote6=0;//////////////
                      const whichNote = document.getElementById(specifiedNote)
                      whichNote.currentTime=0
                      whichNote.play()
                      const graphNote=document.getElementById(specifiedNote+'Tile')
                      graphNote.classList.add('active')
                      timeIntervalNote6=setInterval(()=>{//////////////////////////
                        timeNote6=timeNote6+0.1;////////////////////////
                        if(timeNote6>=parseFloat(duration6)){////////////////////////
                          ended6=true;///////////////////////////
                          whichNote.addEventListener('pause', () => {
                            graphNote.classList.remove('active')
                          })
                          whichNote.pause()
                        }
                      },100)
                    }
                    else{
                      if (ended7){/////////////////////
                        duration7=duration;
                        ended7=false;//////////////////////////////
                        specifiedNote=noteVector[Math.ceil(60*myNote)-1]
                        clearInterval(timeIntervalNote7)////////////////////////
                        timeNote7=0;//////////////
                        const whichNote = document.getElementById(specifiedNote)
                        whichNote.currentTime=0
                        whichNote.play()
                        timeIntervalNote7=setInterval(()=>{//////////////////////////
                          timeNote7=timeNote7+0.1;////////////////////////
                          if(timeNote7>=parseFloat(duration7)){////////////////////////
                            ended7=true;///////////////////////////
                            whichNote.pause()
                          }
                        },100)
                        const graphNote=document.getElementById(specifiedNote+'Tile')
                        graphNote.classList.add('active')
                        whichNote.addEventListener('pause', () => {
                          graphNote.classList.remove('active')
                        })
                      }
                      else{
                        if (ended8){/////////////////////
                          duration8=duration;
                          ended8=false;//////////////////////////////
                          specifiedNote=noteVector[Math.ceil(60*myNote)-1]
                          clearInterval(timeIntervalNote8)////////////////////////
                          timeNote8=0;//////////////
                          const whichNote = document.getElementById(specifiedNote)
                          whichNote.currentTime=0
                          whichNote.play()
                          timeIntervalNote8=setInterval(()=>{//////////////////////////
                            timeNote8=timeNote8+0.1;////////////////////////
                            if(timeNote8>=parseFloat(duration8)){////////////////////////
                              ended8=true;///////////////////////////
                              whichNote.pause()
                            }
                          },100)
                          const graphNote=document.getElementById(specifiedNote+'Tile')
                          graphNote.classList.add('active')
                          whichNote.addEventListener('pause', () => {
                            graphNote.classList.remove('active')
                          })
                        }
                        else{
                          if (ended9){/////////////////////
                            duration9=duration;
                            ended9=false;//////////////////////////////
                            specifiedNote=noteVector[Math.ceil(60*myNote)-1]
                            clearInterval(timeIntervalNote9)////////////////////////
                            timeNote9=0;//////////////
                            const whichNote = document.getElementById(specifiedNote)
                            whichNote.currentTime=0
                            whichNote.play()
                            timeIntervalNote9=setInterval(()=>{//////////////////////////
                              timeNote9=timeNote9+0.1;////////////////////////
                              if(timeNote9>=parseFloat(duration9)){////////////////////////
                                ended9=true;///////////////////////////
                                whichNote.pause()
                              }
                            },100)
                            const graphNote=document.getElementById(specifiedNote+'Tile')
                            graphNote.classList.add('active')
                            whichNote.addEventListener('pause', () => {
                              graphNote.classList.remove('active')
                            })
                          }
                          else{
                            if (ended10){/////////////////////
                              duration10=duration;
                              ended10=false;//////////////////////////////
                              specifiedNote=noteVector[Math.ceil(60*myNote)-1]
                              clearInterval(timeIntervalNote10)////////////////////////
                              timeNote10=0;//////////////
                              const whichNote = document.getElementById(specifiedNote)
                              whichNote.currentTime=0
                              whichNote.play()
                              timeIntervalNote10=setInterval(()=>{//////////////////////////
                                timeNote10=timeNote10+0.1;////////////////////////
                                if(timeNote10>=parseFloat(duration10)){////////////////////////
                                  ended10=true;///////////////////////////
                                  whichNote.pause()
                                }
                              },100)
                              const graphNote=document.getElementById(specifiedNote+'Tile')
                              graphNote.classList.add('active')
                              whichNote.addEventListener('pause', () => {
                                graphNote.classList.remove('active')
                              })
                            }
                            else{
                              if (ended11){/////////////////////
                                duration11=duration;
                                ended11=false;//////////////////////////////
                                specifiedNote=noteVector[Math.ceil(60*myNote)-1]
                                clearInterval(timeIntervalNote11)////////////////////////
                                timeNote11=0;//////////////
                                const whichNote = document.getElementById(specifiedNote)
                                whichNote.currentTime=0
                                whichNote.play()
                                timeIntervalNote11=setInterval(()=>{//////////////////////////
                                  timeNote11=timeNote11+0.1;////////////////////////
                                  if(timeNote11>=parseFloat(duration11)){////////////////////////
                                    ended11=true;///////////////////////////
                                    whichNote.pause()
                                  }
                                },100)
                                const graphNote=document.getElementById(specifiedNote+'Tile')
                                graphNote.classList.add('active')
                                whichNote.addEventListener('pause', () => {
                                  graphNote.classList.remove('active')
                                })
                              }
                              else{
                                if (ended12){/////////////////////
                                  duration12=duration;
                                  ended12=false;//////////////////////////////
                                  specifiedNote=noteVector[Math.ceil(60*myNote)-1]
                                  clearInterval(timeIntervalNote12)////////////////////////
                                  timeNote12=0;//////////////
                                  const whichNote = document.getElementById(specifiedNote)
                                  whichNote.currentTime=0
                                  whichNote.play()
                                  timeIntervalNote12=setInterval(()=>{//////////////////////////
                                    timeNote12=timeNote12+0.1;////////////////////////
                                    if(timeNote12>=parseFloat(duration12)){////////////////////////
                                      ended12=true;///////////////////////////
                                      whichNote.pause()
                                    }
                                  },100)
                                  const graphNote=document.getElementById(specifiedNote+'Tile')
                                  graphNote.classList.add('active')
                                  whichNote.addEventListener('pause', () => {
                                    graphNote.classList.remove('active')
                                  })
                                }
                                else{
                                  if (ended13){/////////////////////
                                    duration13=duration;
                                    ended13=false;//////////////////////////////
                                    specifiedNote=noteVector[Math.ceil(60*myNote)-1]
                                    clearInterval(timeIntervalNote13)////////////////////////
                                    timeNote13=0;//////////////
                                    const whichNote = document.getElementById(specifiedNote)
                                    whichNote.currentTime=0
                                    whichNote.play()
                                    timeIntervalNote13=setInterval(()=>{//////////////////////////
                                      timeNote13=timeNote13+0.1;////////////////////////
                                      if(timeNote13>=parseFloat(duration13)){////////////////////////
                                        ended13=true;///////////////////////////
                                        whichNote.pause()
                                      }
                                    },100)
                                    const graphNote=document.getElementById(specifiedNote+'Tile')
                                    graphNote.classList.add('active')
                                    whichNote.addEventListener('pause', () => {
                                      graphNote.classList.remove('active')
                                    })
                                  }
                                  else{
                                    if (ended14){/////////////////////
                                      duration14=duration;
                                      ended14=false;//////////////////////////////
                                      specifiedNote=noteVector[Math.ceil(60*myNote)-1]
                                      clearInterval(timeIntervalNote14)////////////////////////
                                      timeNote14=0;//////////////
                                      const whichNote = document.getElementById(specifiedNote)
                                      whichNote.currentTime=0
                                      whichNote.play()
                                      timeIntervalNote14=setInterval(()=>{//////////////////////////
                                        timeNote14=timeNote14+0.1;////////////////////////
                                        if(timeNote14>=parseFloat(duration14)){////////////////////////
                                          ended14=true;///////////////////////////
                                          whichNote.pause()
                                        }
                                      },100)
                                      const graphNote=document.getElementById(specifiedNote+'Tile')
                                      graphNote.classList.add('active')
                                      whichNote.addEventListener('pause', () => {
                                        graphNote.classList.remove('active')
                                      })
                                    }
                                    else{
                                      if (ended15){/////////////////////
                                        duration15=duration;
                                        ended15=false;//////////////////////////////
                                        specifiedNote=noteVector[Math.ceil(60*myNote)-1]
                                        clearInterval(timeIntervalNote15)////////////////////////
                                        timeNote15=0;//////////////
                                        const whichNote = document.getElementById(specifiedNote)
                                        whichNote.currentTime=0
                                        whichNote.play()
                                        timeIntervalNote15=setInterval(()=>{//////////////////////////
                                          timeNote15=timeNote15+0.1;////////////////////////
                                          if(timeNote15>=parseFloat(duration15)){////////////////////////
                                            ended15=true;///////////////////////////
                                            whichNote.pause()
                                          }
                                        },100)
                                        const graphNote=document.getElementById(specifiedNote+'Tile')
                                        graphNote.classList.add('active')
                                        whichNote.addEventListener('pause', () => {
                                          graphNote.classList.remove('active')
                                        })
                                      }
                                      else{
                                        if (ended16){
                                          duration16=duration;
                                          ended16=false;//////////////////////////////
                                          specifiedNote=noteVector[Math.ceil(60*myNote)-1]
                                          clearInterval(timeIntervalNote16)////////////////////////
                                          timeNote16=0;//////////////
                                          const whichNote = document.getElementById(specifiedNote)
                                          whichNote.currentTime=0
                                          whichNote.play()
                                          timeIntervalNote16=setInterval(()=>{//////////////////////////
                                            timeNote16=timeNote16+0.1;////////////////////////
                                            if(timeNote16>=parseFloat(duration16)){////////////////////////
                                              ended16=true;///////////////////////////
                                              whichNote.pause()
                                            }
                                          },100)
                                          const graphNote=document.getElementById(specifiedNote+'Tile')
                                          graphNote.classList.add('active')
                                          whichNote.addEventListener('pause', () => {
                                            graphNote.classList.remove('active')
                                          })
                                        }
                                        else{
                                          if (ended17){/////////////////////
                                            duration17=duration;
                                            ended17=false;//////////////////////////////
                                            specifiedNote=noteVector[Math.ceil(60*myNote)-1]
                                            clearInterval(timeIntervalNote17)////////////////////////
                                            timeNote17=0;//////////////
                                            const whichNote = document.getElementById(specifiedNote)
                                            whichNote.currentTime=0
                                            whichNote.play()
                                            timeIntervalNote17=setInterval(()=>{//////////////////////////
                                              timeNote17=timeNote17+0.1;////////////////////////
                                              if(timeNote17>=parseFloat(duration17)){////////////////////////
                                                ended17=true;///////////////////////////
                                                whichNote.pause()
                                              }
                                            },100)
                                            const graphNote=document.getElementById(specifiedNote+'Tile')
                                            graphNote.classList.add('active')
                                            whichNote.addEventListener('pause', () => {
                                              graphNote.classList.remove('active')
                                            })
                                          }
                                          else{
                                            if (ended18){/////////////////////
                                              duration18=duration;
                                              ended18=false;//////////////////////////////
                                              specifiedNote=noteVector[Math.ceil(60*myNote)-1]
                                              clearInterval(timeIntervalNote18)////////////////////////
                                              timeNote18=0;//////////////
                                              const whichNote = document.getElementById(specifiedNote)
                                              whichNote.currentTime=0
                                              whichNote.play()
                                              timeIntervalNote18=setInterval(()=>{//////////////////////////
                                                timeNote18=timeNote18+0.1;////////////////////////
                                                if(timeNote18>=parseFloat(duration18)){////////////////////////
                                                  ended18=true;///////////////////////////
                                                  whichNote.pause()
                                                }
                                              },100)
                                              const graphNote=document.getElementById(specifiedNote+'Tile')
                                              graphNote.classList.add('active')
                                              whichNote.addEventListener('pause', () => {
                                                graphNote.classList.remove('active')
                                              })
                                            }
                                            else{
                                              if (ended19){/////////////////////
                                                duration19=duration;
                                                ended19=false;//////////////////////////////
                                                specifiedNote=noteVector[Math.ceil(60*myNote)-1]
                                                clearInterval(timeIntervalNote19)////////////////////////
                                                timeNote19=0;//////////////
                                                const whichNote = document.getElementById(specifiedNote)
                                                whichNote.currentTime=0
                                                whichNote.play()
                                                timeIntervalNote19=setInterval(()=>{//////////////////////////
                                                  timeNote19=timeNote19+0.1;////////////////////////
                                                  if(timeNote19>=parseFloat(duration19)){////////////////////////
                                                    ended19=true;///////////////////////////
                                                    whichNote.pause()
                                                  }
                                                },100)
                                                const graphNote=document.getElementById(specifiedNote+'Tile')
                                                graphNote.classList.add('active')
                                                whichNote.addEventListener('pause', () => {
                                                  graphNote.classList.remove('active')
                                                })
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  },100)
}

keys.forEach(key => {
  key.addEventListener('click', () => playNote(key))
})

function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note)
  noteAudio.currentTime = 0
  noteAudio.play()
  key.classList.add('active')
  noteAudio.addEventListener('ended', () => {
    key.classList.remove('active')
  })
}
