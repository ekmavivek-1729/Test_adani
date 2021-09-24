#include <bits/stdc++.h>
using namespace std;

#define LIMIT 100

pair<int,int> treePairVertices(string str){             // taking each string from stringArr and return pair of integer
    string num1,num2;
    
    bool flag = false;                                   // when it become true it means second number arrive
    
    for(int i = 0;i < str.size();i++){
        if(str[i] != '(' || str[i] != ')'){             // traversing over string filtering the pair of number
            
            if(str[i] == ','){                         // after this index second number of pair arrive
                flag = true;
                continue;
            }
                
            if(!flag)
                num1 += str[i];                       // first number of pair
            else
                num2 += str[i];                       // second number of pair
                
        }
    }
    
    pair <int,int> num;
    num.first = stoi(num1);                        // conversion of string to number
    num.second = stoi(num2);                      // conversion of string to number
    
    return num;
}

bool treeConstructor(string strArr[]){
    int n = sizeof(strArr)/sizeof(strArr[0]);         //size of stringArr
    
    vector< vector<int> > adjacencyList(LIMIT);      // Construction of AdjacencyList
    
    for(int i = 0;i < n;i++){
        pair<int,int> vertices = treePairVertices(strArr[i]);        // calling function to get pair
        
        adjacencyList[vertices.second].push_back(vertices.first);     // Construction of AdjacencyList
    }
    
    
    for(int i = 0;i < LIMIT;i++)
        if(adjacencyList[i].size() > 2)                               //checking if it's child is more than 2 then it is not binary tree
            return false;
            
    return true;
}

int main() {
	
	string strArr[] = {"(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"};
	
	if(treeConstructor(strArr))
	    cout << "true";
	else
	    cout << "false";
	return 0;
}